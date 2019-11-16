let pageContent={
    "header":{
        content:{
            h2:"My Website",
            p:"A responsive website created by me"
        }
    },
    footer:{
        content:{
            h2:"Footer",
        }
    },
    "main":{
        content:{
            "h3":"Title Heading",
            'p1':"Title description, Dec 7, 2017",
            'div':"Image",
            'p2':"Some text",
            'p3':"Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco."
        }
    }
}


function createHeaderOrFooter(element,whereAppend,mainClass,wh,before=false){
   if(before){
    $(wh).before(`<${whereAppend} class="${mainClass}"></${whereAppend}>`);
   }else{
    $(wh).after(`<${whereAppend} class="${mainClass}"></${whereAppend}>`);
   }
    $(whereAppend).append(`
    <div class="container-fluid">
              <div class="row">
                  <div class="page-content col-12 d-flex justify-content-center align-items-center">
                      
                  </div>
              </div>
          </div>
    `);
    $(".page-content").append('<div class="content"></div>');
    for(let cont in element){
        
        let tag = element[cont];
       for(let el in tag){
        console.log(tag[el]);
        $(`${whereAppend} .content`).append(`<${el}>${tag[el]}</${el}>`)
       }
        
    }
}
function pageNavigation(){
    $('nav').append(`
    <div class="container-fluid">
            <div class="row">
                    <div class="col-12">
                            <ul class="row  p-0 ">
                                    <li class="col-12 col-sm-2 col-md-1 text-left-md text-center"> <a class="" href="">Home</a></li>
                                    <li class="col-12 col-sm-2 col-md-1 text-left-md text-center"><a href="">Link</a></li>
                                    <li class="col-12 col-sm-2 col-md-1 text-left-md text-center"><a href="">Link</a></li>
                                    <li class="col-sm-4 col-md-8 text-left-md text-center"></li>
                                    <li class="col-12 col-sm-2 col-md-1 text-right-md text-center"><a href="">Link</a></li>
                            </ul>
                    </div>
            </div>
            </div>
          </div>
    `);
}

function createElement(element,count){
    for(let i=0;i<count; i++){
        $('section').append(`
    <div class="content p-3">
                    <h3>${element["h3"]}</h3>
                    <p>${element['p1']}</p>
                    <div class="img">
                        <p>Image</p>
                    </div>
                    <p>${element['p2']}</p>
                    <p>${element['p3']}</p>

                </div>
    
    `);  
    }
}