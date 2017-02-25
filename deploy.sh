#!/usr/bin/env sh

bundle exec middleman build
surge -d http://muxu.video -p build
