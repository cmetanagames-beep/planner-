#!/usr/bin/env bash
set -euo pipefail

install_root="${WHISPER_INSTALL_ROOT:-$HOME/lumo-whisper}"
model_name="${WHISPER_MODEL_NAME:-base}"
cmake_version="4.3.3"
cmake_sha256="927b2368a946c37269c3a66225ab00544e756459cdd0b5d0da438694fb9ff802"

mkdir -p "$install_root/tools" "$install_root/src"
cd "$install_root/tools"
if [ ! -x "cmake-$cmake_version-linux-x86_64/bin/cmake" ]; then
  curl -fL --retry 3 -o cmake.tar.gz "https://github.com/Kitware/CMake/releases/download/v$cmake_version/cmake-$cmake_version-linux-x86_64.tar.gz"
  echo "$cmake_sha256  cmake.tar.gz" | sha256sum -c -
  tar -xzf cmake.tar.gz
fi

cd "$install_root/src"
if [ ! -f CMakeLists.txt ]; then
  curl -fL --retry 3 -o whisper.tar.gz https://github.com/ggml-org/whisper.cpp/archive/refs/heads/master.tar.gz
  tar -xzf whisper.tar.gz --strip-components=1
fi

cmake_bin="$install_root/tools/cmake-$cmake_version-linux-x86_64/bin/cmake"
"$cmake_bin" -B build -DCMAKE_BUILD_TYPE=Release
"$cmake_bin" --build build -j2 --target whisper-cli
sh models/download-ggml-model.sh "$model_name"

echo "WHISPER_ROOT=$install_root/src"
echo "Готово: $install_root/src/build/bin/whisper-cli"

