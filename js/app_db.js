

jQuery(document).ready(function(){
 /*  var  data2= [{"id":1,"created_at":"2021-07-31T09:29:55.000000Z","updated_at":"2021-07-31T09:29:55.000000Z","q":"Book?","is_active":"y",
  "question_choice":
  [
  {"id":1,"created_at":"2021-07-31T09:31:53.000000Z","updated_at":"2021-07-31T09:31:53.000000Z","question_id":"1","is_right":"n","o":"\u0643\u0631\u0633\u064a"},
  {"id":2,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"y","o":"\u0643\u062a\u0627\u0628"},
  {"id":3,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"n","o":"\u0633\u064a\u0627\u0631\u0629"}
 ]
},
{"id":1,"created_at":"2021-07-31T09:29:55.000000Z","updated_at":"2021-07-31T09:29:55.000000Z","q":"Book?","is_active":"y",
  "question_choice":
  [
  {"id":1,"created_at":"2021-07-31T09:31:53.000000Z","updated_at":"2021-07-31T09:31:53.000000Z","question_id":"1","is_right":"n","o":"\u0643\u0631\u0633\u064a"},
  {"id":2,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"y","o":"\u0643\u062a\u0627\u0628"},
  {"id":3,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"n","o":"\u0633\u064a\u0627\u0631\u0629"}
 ]
},
{"id":1,"created_at":"2021-07-31T09:29:55.000000Z","updated_at":"2021-07-31T09:29:55.000000Z","q":"Book?","is_active":"y",
  "question_choice":
  [
  {"id":1,"created_at":"2021-07-31T09:31:53.000000Z","updated_at":"2021-07-31T09:31:53.000000Z","question_id":"1","is_right":"n","o":"\u0643\u0631\u0633\u064a"},
  {"id":2,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"y","o":"\u0643\u062a\u0627\u0628"},
  {"id":3,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"n","o":"\u0633\u064a\u0627\u0631\u0629"}
 ]
},
{"id":1,"created_at":"2021-07-31T09:29:55.000000Z","updated_at":"2021-07-31T09:29:55.000000Z","q":"Book?","is_active":"y",
  "question_choice":
  [
  {"id":1,"created_at":"2021-07-31T09:31:53.000000Z","updated_at":"2021-07-31T09:31:53.000000Z","question_id":"1","is_right":"n","o":"\u0643\u0631\u0633\u064a"},
  {"id":2,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"y","o":"\u0643\u062a\u0627\u0628"},
  {"id":3,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"n","o":"\u0633\u064a\u0627\u0631\u0629"}
 ]
},
{"id":1,"created_at":"2021-07-31T09:29:55.000000Z","updated_at":"2021-07-31T09:29:55.000000Z","q":"Book?","is_active":"y",
  "question_choice":
  [
  {"id":1,"created_at":"2021-07-31T09:31:53.000000Z","updated_at":"2021-07-31T09:31:53.000000Z","question_id":"1","is_right":"n","o":"\u0643\u0631\u0633\u064a"},
  {"id":2,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"y","o":"\u0643\u062a\u0627\u0628"},
  {"id":3,"created_at":"2021-07-31T09:32:44.000000Z","updated_at":"2021-07-31T09:32:44.000000Z","question_id":"1","is_right":"n","o":"\u0633\u064a\u0627\u0631\u0629"}
 ]
}
] *//* [
    {
      q : "Book",
      o : [
        "قلم",
        "كتاب",
        "سبورة",
        "قلم"
      ],
      a : 1 // arrays start with 0, so answer is 70 meters
    },
    {
      q : "Car",
      o : [
        "تاب",
        "حاسب الي",
        "تلفاذ",
        "سيارة"
      ],
      a : 3
    },
    {
      q : "Man",
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
      q : "Tree",
      o : [
        "تلفاذ",
        "بيت",
        "كرسي",
        "شجرة"
      ],
      a : 3
    }
    ] */
    let question_count=1;
    //let randomnumber=Math.floor( Math.random() * 4 );
   
/*####### get 10 numbers no repeate ################################*/
var min = 1;
var max = 10;
//Number of numbers to extract
var stop = 10;
var numbers = [];
for (let i = 0; i < stop; i++) {
  var n =  Math.floor(Math.random() * max) + min;
  var check = numbers.includes(n);
  if(check === false) {
    numbers.push(n);
  } else {
    while(check === true){
      n = Math.floor(Math.random() * max) + min;
      check = numbers.includes(n);
        if(check === false){
          numbers.push(n);
        }
     }
  }
}
/*##########End##################################################################*/
var ranNums = shuffle(numbers);
    randomnumber =ranNums.next().value;
     
    $('#question_count').text(question_count+"-"+10);
    console.log("randomnumber:"+randomnumber);
    let points=0;
    $.ajax({
    method : 'GET',
    url:'http://localhost/test_blade/public/test',
    dataType: 'json',
    success:function newQuestion(data2){
     // alert( (data2[0]));
    $('#randomquestion').text(data2[randomnumber].question);
      $('#btn1').text(data2[randomnumber].question_choice[0].choice);
      $('#btn2').text( data2[randomnumber].question_choice[1].choice);
      $('#btn3').text( data2[randomnumber].question_choice[2].choice);
    // $('#btn4').text( data2[randomnumber].question_choice[3].o);
    let correctAnsIndex=0;
    let correctAns ="";
    data2[randomnumber].question_choice.forEach(myFunction);
    function myFunction(item, index, arr) {
      if(arr[index].is_right == "y"){
        correctAnsIndex=index;
        correctAns=arr[index].choice;
      } 
    } 

   //{id ,created_at ,updated_at ,question_id ,is_right ,o} 
    console.log("correctAns:" +correctAns);

    $('.btn_opt').on('click', function(){
    //console.log(data)
   
   
         question_count++;
   
    let userAns=$(this).text();
    /* alert("user ans:"+ userAns);
    alert("user correctAns:"+ correctAns); */
    if (userAns  == correctAns ){
    $('h3').text("إجابة صحيحة")
    
    points += 1;
     
     
    $(this).attr('style', 'background-color: green !important');
   
   $(this).append('<i class="material-icons">check</i>');
    }
    else{
    $('h3').text("إجابة خاطئة");
    $(this).attr('style', 'background-color: red !important');
   $(this).append('<i class="material-icons">clear</i>');

    }
    
   setTimeout(function() 
    {
      if(question_count <= 10) { $('.btn').attr('style', 'background-color: #fff !important');
       $('#randomquestion').text(data2[randomnumber].question);
       $('#question_count').text(question_count+"-"+10);
       $('#btn1').text(data2[randomnumber].question_choice[0].choice);
       $('#btn2').text( data2[randomnumber].question_choice[1].choice);
       $('#btn3').text( data2[randomnumber].question_choice[2].choice);
    }
  }, 300);

 
    
    
     
  if(question_count <= 10) {
    randomnumber=ranNums.next().value;//Math.floor( Math.random() * 4 );     
       
    data2[randomnumber].question_choice.forEach(myFunction);
    function myFunction(item, index, arr) {
      if(arr[index].is_right == "y"){
        correctAnsIndex=index;
        correctAns=arr[index].choice;
      } 
    } 
  }
   
    if(question_count > 10) { stopInterval();} 
   
    })
    }
    }) //$ajax
//////////////////////////////////////////////////////////////////////
    var count =0;
    var timer = setInterval(function() {
    $('h3').text("مضي من الوقت ["+ count+ "] ثانية ");
    count ++  ;
    /* if(count == 0) {
    stopInterval()
    } */
    
    
    }, 2000);
    /////////////////////////////////////////////////////////////////
    var stopInterval = function() {
     /*  $('#btn1').attr('disabled', true); 
      $('#btn2').attr('disabled', true); 
      $('#btn3').attr('disabled', true); 
      $('#btn4').attr('disabled', true);  */
      $('#btn1').hide();
      $('#btn2').hide();
      $('#btn3').hide();
      $('#btn4').hide();
      $('#randomquestion').hide();
    $('h3').text("انتهي الإختبار");
      $('h3').text("النتيجة" + points + " درجة! "); // if you see final score then open this comment
    $('span').hide()
    $(".submit").hide();
    clearInterval(timer);
    $("#after_result_action>p").text("النسبة:"+(points/10)*100 + "%");
    $("#after_result_action> #correct_count").text("عدد الإجابات الصحيحة:"+ points );
    $("#after_result_action> #rowng_count").text("عدد الاجابات الخاطئة:"+   (10-points)  );
    
    
    $("#after_result_action").show();
    $("#after_result_action_btn").show();
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

      function* shuffle(array) {

        var i = array.length;
    
        while (i--) {
            yield array.splice(Math.floor(Math.random() * (i+1)), 1)[0];
        }
    
    }
    /*var ranNums = shuffle([1,2,3,4,5,6,7,8,9,10]);
ranNums.next().value;    // first random number from array
ranNums.next().value;    // second random number from array
ranNums.next().value;    // etc.*/


function passing(parama1, page){
var firstDate=document.getElementsByName("firstDate");
var secondDate=document.getElementsByName("secondDate");
var queryString = "?para1=" + parama1  ;
window.location.href = page + queryString;
}
 

/////////////////////////////////////////////////////////////////////////

 
//Sort the array in ascending order
/* function sort() {
  numbers.sort(function(a, b){return a-b});
  document.getElementById("array_number").innerHTML = numbers.join(" - ");
} */
////////////////////////////////////////////////////////////////