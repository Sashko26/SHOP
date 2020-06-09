<template>
  <div class='apple-main-page'>
    <div class="contact">
        <div>
        <title>About</title>
         <p>
             We sell apple devices for low prices!
         </p> 
         <p>
            Telephone number: +380962075369
         </p>
         <p>
            Email: oleksandrklapatyuk@gmail.com
         </p>
        </div>
          <div class="apple-main-page_visual_content">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d788.1047493692009!2d29.521343736558286!3d48.36325537700518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1591614721053!5m2!1sru!2sua" width="300px" height="300px" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
          <div class="apple-main-page_galerry">

                <div class="apple-main-page_galerry_row" style="background-color:aqua">
                        <div class="apple-main-page_galerry_piece" style="background-color:blue">
                             <img src="../../assets/hi/2g.jpg"/>
                            </div>
                            <div class="apple-main-page_galerry_piece" style="background-color:#cccc">
                               <img src="../../assets/hi/3g.jpeg"/>
                            </div>
                            <div class="apple-main-page_galerry_piece" style="background-color:bisque">
                               <img src="../../assets/hi/4.jpg"/>
                            </div>

                </div>
                   

                <div class="apple-main-page_galerry_row" style="background-color:#cccc">
                        <div class="apple-main-page_galerry_piece" style="background-color:aqua">
                               <img src="../../assets/hi/5s.png"/>
                            </div>
                            <div class="apple-main-page_galerry_piece" style="background-color:blue" >
                               <img src="../../assets/hi/apple.png"/>
                            </div>
                            <div class="apple-main-page_galerry_piece" style="background-color:bisque">
                               <img src="../../assets/hi/6.png"/>
                            </div>

                </div>

                <div class="apple-main-page_galerry_row" style="background-color:bisque">
                        <div class="apple-main-page_galerry_piece" style="background-color:aqua">
                               <img src="../../assets/hi/7.jpg"/>
                            </div>
                            <div class="apple-main-page_galerry_piece" style="background-color:#cccc">
                                 <img src="../../assets/hi/11.jpeg"/>
                            </div>
                            <div class="apple-main-page_galerry_piece" style="background-color:blue" >
                                 <img src="../../assets/hi/touch5.jpg"/>
                            </div>
              </div>
        </div>
      </div>
        
    </div>
   
    <div>
      <router-link :to="{name: 'catalog'}">
        to Catalog
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "apple-main-page"
  }
</script>

<style scoped lang='scss'>

iframe{
  float:left;
}
 .apple-main-page_galerry
                {
  width:300px;
  height:300px;
  background-color: aquamarine;
  justify-content: space-between;
  display: flex;
  flex-direction:column;
  &_row
  {
     display: flex;
   flex-direction:row;
   justify-content: space-between;
   height:30%;
  }
  &_piece
  {
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    width:30%;

  }
  }
  @media screen and (max-width:  620px) {
   .apple-main-page_visual_content
   {
     display:flex;
     flex-direction:column;
   }
}
.contact
{
   font-size: 3.25vw;
   align-items: center;
   display: flex;
   flex-direction:column;
}
</style>
