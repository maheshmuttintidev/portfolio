#!/bin/bash
echo "First arg: $1"
echo "Second arg: $2"
cp="adb uninstall com.maheshmuttinti && adb install -r apps/$2/android/app/build/outputs/apk/release/app-release.apk"

eval "$cp"