const options = {
  threshold: 0.5,
};

let arrNav = document.querySelectorAll('a')


const observer = new IntersectionObserver((entires, obs) => {
  entires.forEach((entry) => {
    if (entry.isIntersecting) {
      // console.log(entry.target.id)
      if(entry.target.id === 'article-1'){
        arrNav.forEach(navItem=>{
          if(navItem.id != 0){
            navItem.style.backgroundColor ='rgb(101, 70, 70)'
          }
        })
        arrNav[0].style.backgroundColor = 'red'
      }
      if(entry.target.id === 'article-2'){
        arrNav.forEach(navItem=>{
          if(navItem.id != 1){
            navItem.style.backgroundColor ='rgb(101, 70, 70)'
          }
        })
        arrNav[1].style.backgroundColor = 'green'

      }
      if(entry.target.id === 'article-3'){
        arrNav.forEach(navItem=>{
          if(navItem.id != 2){
            navItem.style.backgroundColor ='rgb(101, 70, 70)'
          }
        })
        arrNav[2].style.backgroundColor = 'blue'
      }

    }
  });
}, options);

let arrArticle = document.querySelectorAll("article");
arrArticle.forEach((block) => {
  observer.observe(block);
});