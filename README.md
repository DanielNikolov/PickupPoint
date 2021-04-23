# PickupPoint
## Prerequisites
- You need to have SSH key added to your SFCC repository

## Steps
- Checkout/Download the project
- In project root folder run the following command git submodule update --recursive in order to download the SFRA reference app (v.5.3.0)
- In your sandbox import using Merge Mode the services.xml file located in int_pickuppoint/configurations
- In project root folder run the following command: npm install
- Go to sfra-webpack-builder folder and run npm install
- In the same folder run npm run npmInstall
- After that run npm run watch. It will compile all scss/js files
- In project root folder you need to create dw.json file to be used for file upload to your sandbox