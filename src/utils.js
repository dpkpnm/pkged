import Vue from "vue"
import axios from "axios"
import _ from "lodash"

export default {
  all(urls) {
    axios.get(urls)
      .then(axios.spread(function() {
        console.log(arguments);
      })).catch(function(error) {
        console.log(error);
      })
  },
  getAll(url, success, error, data, page) {
    var that = this;
    var dt = new Date();
    var nocacheurl = url + (url.indexOf("?")>0?"&":"?") + "_nocache="+dt.toISOString();
    axios.get(nocacheurl)
       .then(function(response) {
          if(response.data.total == 1)
            success(response.data.rows);
          else {
            var urls = _(response.data.total).range().map(function(v) { return axios.get(url+(url.indexOf("?")>0?"&":"?") + "page="+(v+1)+"&_nocache="+dt.toISOString());}).value();
            axios.all(urls)
              .then(function(response) {
                success(_(response).reduce(function(a,v) {
                  return _(a).union(v.data.rows).value();},[]));
              })
          }
          // if(response.data.total>0 && response.data.page<response.data.total) {
          //   that.getAll(url, success, error, _(data).union(response.data.rows).value(), page+1);
          // }
          // else {

          //   success(_.union(data, response.data.rows).value());
          //   debugger;
          // }
        })
        .catch(function(err) {
          if(error)
            error(err.response.data);
          });
  },
  get(url, success, error) {
    var dt = new Date();
    var cache = {};

    if(url!="/utility/language") {
      if(url.indexOf("?")>0)
        url+="&_nocache="+(dt.toISOString());
      else
        url+="?_nocache="+(dt.toISOString());
      // this for some reason doesn't work with ie
       cache  = {'Cache-Control':'no-cache, no-store','Pragma': 'no-cache, no-store'};
    }
    // console.log(url + JSON.stringify(cache));
    axios.get(url, cache)
      .then(success)
      .catch(function(err) {
        if(error)
          error(err.response.data);
      })
  },
  put(url,data) {
    axios.put(url,data.data)
      .then(function(response) {
        data.cb(response);
      })
      .catch(function(error) {
        data.cb(error);
      })
  },
  post(url, data) {
    axios.post(url,data.data)
      .then(data.cb)
      .catch(data.cb)
  },
  postForm(url, data) {
    axios.post(url,data.val,{
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    })
        .then(data.data.cb)
        .catch(data.data.cb)
  },
  delete(url, data) {
    axios.delete(url + data.id)
      .then(data.cb)
      .catch(data.cb)
  },
  mapObject: function(value) {
    // convert deep arrays [edit,view] to map {edit:true,view:true}
    var data={};
    _(value).forEach(function(v,k) {
      if(_(v).isArray())
        _(v).forEach(function(v1) {
          if(v1.id)
            data[k+"_"+v1.id]=v1;
          else
            data[k+"_"+v1]=true;
        });
      else if(_(v).isObject())
        _(v).forEach(function(v1,k1) {var k1=k1; _(v1).forEach(function(v2) { data[k1+"_"+v2]=true;})});
      else
        data[k]=v;
    });
    return data;
  }
}