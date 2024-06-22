#!/bin/bash
echo "First arg: $1"
echo "Second arg: $2"
cp="cp apps/mahesh/android/app/build/outputs/apk/release/app-release.apk ~/Desktop/`date +%d_%m_%Y_%H_%M`_maheshmuttinti_$1_$2.apk"

eval "$cp"