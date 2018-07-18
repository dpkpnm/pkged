#!/bin/bash

npm run build
cd dist
firebase deploy
cd ..