$(document).ready(function(){
  $(function(){
      $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1400,
        });
      });
      

    /*post array/json */
    articles.forEach((item, index)=> {
      var post = ` 
      <article class="post">
      <h2>${item.title}</h2>
      <span>${item.date}</span>
      <button class="coment">comentar</button>
      <p>
        ${item.content}
      </p>
      <a href="#" class="button-more">Leer mas</a>
      </article>
      `;
      
  $('#post').append(post)


    });



  });
  /*<article class="post">
    <h2>${item.title}</h2>
    <span>${item.date}</span>
    <button class="coment">comentar</button>
    <p>
      ${item.content}
    </p>
    <a href="#" class="button-more">Leer mas</a>

</article>*/