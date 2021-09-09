# React Native Augmented Reality mobile app (example)
Welcome to the project!

## Platforms support
iOS - Full  
Android - Partial

## Workflow tips
Try to use square markers for the anchors, so the ViroReact could easily recognize them.

## Useful info
We use [ViroReact](https://viromedia.com/viroreact/) AR library for this project.  
Docs - https://docs.viromedia.com/docs  
Old ViroReact repository - https://github.com/viromedia/viro  
Current ViroReact repository - https://github.com/ViroCommunity/viro

## Basic setup
Please proceed with basic environment setup with [React Native docs](https://reactnative.dev/docs/environment-setup).

## Dependencies
We are using yarn with this project, so if it not installed please do.

Install all npm dependencies and pods - `yarn` in root directory.
>Note: making `yarn` in the root directory will automaticaly install all pods in ./ios folder.  
>So there is no need to do this manually.

## Basic commands

>Note: make sure that you run all commands below in the root directory of the project!

Build and run on iOS emulator - `yarn ios`.

Build and run on android emulator - `yarn android`.
>Note: if you need to build on android emulator with release setting use with `--variant=release`.  
>So command will be `yarn android --variant=release`.

Clean all dependenciy files and build files (Don't forget to run `yarn` after) - `yarn wipe`.
