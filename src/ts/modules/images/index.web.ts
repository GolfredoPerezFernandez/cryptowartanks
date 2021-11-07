/**
* index.web.ts
* Copyright: Microsoft 2018
*
* Web implementation of "images" module.
*/

import AppConfig from '../../app/AppConfig';

import { ImageSourceBase } from './Images';

class ImageSource implements ImageSourceBase {
    todoLogo = AppConfig.getImagePath('todo-logo.png');
    todoSmall = AppConfig.getImagePath('todo-small.png');
    logo = AppConfig.getImagePath('logo.png');
    logo2 = AppConfig.getImagePath('logo2.png');
    background = AppConfig.getImagePath('background.png');
    metamask = AppConfig.getImagePath('metamask.png');
    moralis = AppConfig.getImagePath('moralis.png');
    box1 = AppConfig.getImagePath('box1.png');
    box2 = AppConfig.getImagePath('box2.png');
    box3 = AppConfig.getImagePath('box3.png');
    tokenomics = AppConfig.getImagePath('tokenomics.png');
}

export default new ImageSource();
