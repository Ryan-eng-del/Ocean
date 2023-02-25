#!/bin/bash

pnpm run docs:build
cd ./docs-dist
git init
git add -A
git commit -m "deploy ocean site"
git remote add site git@github.com:Ryan-eng-del/ryan-eng-del.github.io.git
git push --force site main
