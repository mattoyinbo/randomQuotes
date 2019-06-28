(() => {

    let faithQuote = [
            {quote: "Let your life reflect the faith you have in God. Fear nothing and pray about everything. Be strong, trust God's word, and trust the process", 
              author :"Germany Kent"
            },
            {quote: "Thoughts frame your portrait, action paints it.", 
              author :"Charles F. Glassman"
            },
            {quote: "Keep the faith. The vision is always for the appointed time. Be patient, prayerful and wait for the fulfillment of your visions", 
              author :"Lailah Gifty Akita"
            },
            {quote: "Yes, we were given the free-will to choose how to be, but we can still go back to the one who gave it to us for guidance on how to use it", 
              author :"Dr. Jacinta Mpalyenkana, Ph.D, MBA"
            },
            {quote: "If you lived my life, you wouldn’t believe in coincidence. I shouldn’t even be here", 
              author :"Catherine DePasquale"
            },
            {quote: "Can you see God? You haven't seen him? I've never seen the wind. I see the effects of the wind, but I've never seen the wind. There's a mystery to it", 
              author :"Billy Graham"
            },
            {quote: "No matter what has happened to you in the past or what is going on in your life right now, it has no power to keep you from having an amazingly good future if you will walk by faith in God. God loves you! He wants you to live with victory over sin so you can possess His promises for your life today!", 
              author :"Joyce Meyer"
            },
            {quote: "Through hard work, perseverance and a faith in God, you can live your dreams", 
              author :"Ben Carson"
            },
            {quote: "God, our Creator, has stored within our minds and personalities, great potential strength and ability. Prayer helps us tap and develop these powers", 
              author :"A.P.J Abdul Kalam"
            },
            {quote: "Where God guides, He provides. No matter how things look, God is still in control. Stay in peace and be hopeful. Your blessing is coming soon", 
              author :"Germany Kent"
            }];
    
     const quotes = document.getElementById('quote');
     const genBtn = document.getElementById('gen-btn');
     const author = document.querySelector('.author'); 

     genBtn.addEventListener('click',()=>{
         let index = getQuoteIndex();
        quotes.innerHTML = `<span class="text-success"><i>${faithQuote[index].quote}</i></span>`;
        author.textContent = faithQuote[index].author;
        console.log(author.textContent);
        
     });

     function getQuoteIndex()
     {
        return Math.floor(Math.random() * faithQuote.length);
     }
     
    


})
();


// const source = document.querySelector('div.source');

// source.addEventListener('copy', (event) => {
//     const selection = document.getSelection();
//     event.clipboardData.setData('text/plain', selection.toString().toUpperCase() + 'Read more');
//     event.preventDefault();
// });