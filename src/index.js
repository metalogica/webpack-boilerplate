import createImage from './createImage';
import HelloWorldButton from './components/helloWorldButton';
import Header from './components/header'

createImage();

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const header = new Header();
header.render();
