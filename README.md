### This is a test task ###

## TASK ##
Реализовать галерею на базе React-Native (иначе React) которая будет отображать фотографии из 500px. Это приложение должно извлекать ресурс в формате JSON по следующему вызову REST API :
https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF
Следующие страницы могут быть извлечены добавлением параметра ‘page=N’
https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=2
Приложение должно содержать два экрана(страницы):
* Список
- мини изображение с названием и автором
- когда пользователь нажимает на изображение, открывается экран фотографии 
* Фотография
- отображает одну фотографию с максимальной площадью



## SOLUTION ##
      
  #### Functional ####
  - view mini image with title and author    
  - view the image in full screen
  - switching between images full screen
  - add more images
  
  #### Launching ####
  - Run the command "npm install" and "npm install gulp -g" 
  + For development:
   - Start the server with the command "node server.js"
   - Run gulp with a command "gulp"
  + For Production:
   - Run gulp with a command "gulp build" (He will collect the whole project),
   - Start the server with the command "node server.js".
   
   #### How it works ####
   
   - grid images
   ![authorization png](https://github.com/TaylerGur/test_gallery_pc/blob/master/gallery.png)
   >If you liked the picture and you want to see it in full screen, just click on it.
   - full screnn image
   ![authorization png](https://github.com/TaylerGur/test_gallery_pc/blob/master/fullScreen.png)
   >You can move forward and backward through pictures. If you want to go back to the gallery, click the button "back".
   - add more images
   ![authorization png](https://github.com/TaylerGur/test_gallery_pc/blob/master/moreImages.png)
   >If you thought that the pictures are small, it does not matter, click on the "more images" button and there will be more of them;)
   
   #### Used stack of technologies ####
    -react
    -redux
    -node.js
    -express
    -gulp
    -axios
    
    Thanks;)
