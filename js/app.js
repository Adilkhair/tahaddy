

jQuery(document).ready(function(){
  var  data2= [
    {
      q : "Book?",
      o : [
        "قلم",
        "كتاب",
        "سبورة",
        "قلم"
      ],
      a : 1 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "Car?",
      o : [
        "تاب",
        "حاسب الي",
        "تلفاذ",
        "سيارة"
      ],
      a : 3
    },
    {
      q : "Man?",
      o : [
        "أخ",
        "أخت",
        "رجل",
        "إمراءة"
      ],
      a : 2
    },
    {
      q : "Computer",
      o : [
        "حاسب الي",
        "هاتف جوال",
        "تلفاذ",
        "كرسي"
      ],
      a : 0
    },
    {
      q : "Tree?",
      o : [
        "تلفاذ",
        "بيت",
        "كرسي",
        "شجرة"
      ],
      a : 3
    }
    ]

    let randomnumber=Math.floor( Math.random() * 4 );
    console.log("randomnumber:"+randomnumber);
    let points=0;
    $.ajax({
    method : 'GET',
    url:'https://api.jsonbin.io/b/5dc2a6f7ce068a7724676fa9',
    success:function newQuestion(data){
       
    $('#randomquestion').text(data2[randomnumber].q);
    $('#btn1').text(data2[randomnumber].o[0]);
    $('#btn2').text( data2[randomnumber].o[1]);
    $('#btn3').text( data2[randomnumber].o[2]);
    $('#btn4').text( data2[randomnumber].o[3]);

    let correctAns = data2[randomnumber].o[data2[randomnumber].a]/*  data2[randomnumber].a ; */
    console.log("correctAns:" +correctAns);

    $('.btn').on('click', function(){
    //console.log(data)
    let userAns=$(this).text();
    /* alert("user ans:"+ userAns);
    alert("user correctAns:"+ correctAns); */
    if (userAns  == correctAns ){
    $('h3').text("Right answer")
    
    points += 1;
    

    }
    else{
    $('h3').text("Wrong Answer");
    }

    randomnumber=Math.floor( Math.random() * 4 );
    console.log(randomnumber);
    //console.log(data[randomnumber].question)
    $('#randomquestion').text(data2[randomnumber].q);

    $('#randomquestion').text(data2[randomnumber].q);
    $('#btn1').text(data2[randomnumber].o[0]);
    $('#btn2').text( data2[randomnumber].o[1]);
    $('#btn3').text( data2[randomnumber].o[2]);
    $('#btn4').text( data2[randomnumber].o[3]);

     correctAns = data2[randomnumber].o[data2[randomnumber].a]/*  data2[randomnumber].a ; */
   // console.log("correctAns:" +correctAns);

    })
    }
    }) //$ajax

    var count = 20;
    var timer = setInterval(function() {
    $('h3').text("مضي من الوقت ["+ count+ "] ثانية ");
    count --  ;
    if(count == 0) {
    stopInterval()
    }
    }, 2000);
    //////////////////////////////////
    var stopInterval = function() {
      $('#btn1').attr('disabled', true); 
      $('#btn2').attr('disabled', true); 
      $('#btn3').attr('disabled', true); 
      $('#btn4').attr('disabled', true); 
    $('h3').text("Time out")
      $('h3').text("النتيجة" + points + " درجة!") // if you see final score then open this comment
    $('span').hide()
    $(".submit").hide();
    clearInterval(timer);
    $("#after_result_action").show();
    }
    /////////////////////////////////////

    })



/* const container = document.querySelector("#quiz_cat")
const categ = [
  { name: "قران كريم", id:"1"  },
  { name: "السيييرة النبوية" , id:"2" },
  { name: "كلمات انكليزية كريم" , id:"3" },
  { name: "معلومات عامة" , id:"4" },
  ]

  const showCoffees = () => {
    let output = ""
    categ.forEach(
      ({ name, id }) =>
        (output += `
                  <div class="row  center-align">
                  <a class="waves-effect waves-light btn btn-large home_scr" href="quiz_page.html?id=${id}">${name}</a>
                </div>
                `)
    )
    container.innerHTML = output;
    }
    document.addEventListener("DOMContentLoaded", showCoffees);

    /////////////////////////////////////////////
    const q = document.querySelector("#quiz_q")
    const exam_1 = [
      { q: "Book?", id:"1"  },
      { q: "Car?" , id:"2" },
      { q: "Pen?" , id:"3" },
      { q: "Ball?" , id:"4" },
      ]
    const showQues = () => {
      let output = '<p class="text-lighten-4 center"> <h1 id="cat_no"></h1>(1-10)</p><br/>';
      exam_1.forEach(
        ({ q, id }) =>
          (output += `
        <h2 id="logo-container" href="/" class="brand-logo center"  > ${q} </h2>
        <div class="row  center-align">
          <a class="waves-effect waves-light  btn btn-large home_scr" href="quiz_result.html">قلم</a>
        </div>
         <div class="row  center-align"> 
           <a class="waves-effect waves-light  btn btn-large home_scr" href="quiz_result.html"> سبورة</a>
        </div>
        <div class="row  center-align"> 
          <a class="waves-effect waves-light  btn btn-large home_scr" href="quiz_result.html" >كتاب</a>
         </div>
                  `)
      )
      q.innerHTML = output;
      }
      document.addEventListener("DOMContentLoaded", showQues); */