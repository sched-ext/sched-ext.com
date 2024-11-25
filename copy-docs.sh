#!/bin/bash

if [ ! -d "sched-ext" ]; then
    echo "Could not find sched-ext folder. Ensure that you are in the same directory as the copy-docs.sh script"
    exit 1
fi

# Create a temporary directory for cloning the repository
CLONE_DIR=$(mktemp -d)
echo "Cloning repository into temporary directory: $CLONE_DIR"

# Clone the repository
git clone https://github.com/sched-ext/scx.git "$CLONE_DIR"

# Check if the clone was successful
if [ $? -ne 0 ]; then
  echo "Failed to clone the repository."
  exit 1
fi

cp ${CLONE_DIR}/OVERVIEW.md ./sched-ext/docs/
WEB=${PWD}
# Find all markdown files and copy them to the new temp directory
cd ${CLONE_DIR} && find ./scheds/ -type f -name "*.md" | tar --files-from=- -cvzf ${CLONE_DIR}/markdown_files.tar.gz
cd ${WEB}
tar -xzvf ${CLONE_DIR}/markdown_files.tar.gz -C ./sched-ext/docs/
