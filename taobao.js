//变量
var importJs=document.createElement('script')//在页面新建一个script标签
importJs.setAttribute("type","text/javascript")//给script标签增加type属性
importJs.setAttribute("src", 'https://ajax.microsoft.com/ajax/jquery/jquery-1.8.3.min.js') //给script标签增加src属性， url地址为cdn公共库里的
document.getElementsByTagName("head")[0].appendChild(importJs)


let sleep = function (time) {
    let now = Date.now() // 获取当前毫秒数
    // 设置while循环，循环条件为：实时时间减去记录时间小于3s，否则则循环结束
    while(Date.now() - now < time){}
}


function changeContent(obj,str) {
    obj.select();
    document.execCommand('insertHTML',false,str|| "") ? 'successful' : 'unsuccessful'
    //sleep(1000)  //3000 还是说换完后要点击？？？
}

//信息字符串：产品型号 容量 电压 尺寸（H） 尺寸（W） 尺寸（L）
var informat = "703037 700 3.7 7 30 37";
var str_product_title = "abc"; 
var str_key_words ="abc";
arr=informat.split(" ");
var str_specifications=arr[0];
var str_Capacity = arr[1];
var str_Voltage = arr[2];
var str_sizeH = arr[3];
var str_sizeW = arr[4];
var str_sizeL = arr[5];

//基本信息
var product_title = document.querySelector("#productTitle", document);
var key_words = document.querySelector("#struct-productKeywords > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div.info-content.help-padding > div > ul > li:nth-child(1) > div > span > input[type=text]", document);

var dianchiguige = document.querySelector("#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]", document);
var xinghao = document.querySelector("#struct-p-191284004 > div.sell-catProp-struct > div.content > span > input[type=text]", document);
var zhongliang = document.querySelector("#struct-p-191284073 > div.sell-catProp-struct > div.content > span > input[type=text]", document);


changeContent(dianchiguige,str_sizeH+"*"+str_sizeW+"*"+str_sizeL+"(mm)");
changeContent( xinghao, str_specifications);
changeContent( zhongliang,parseInt(str_Capacity)/100*2+"g" );



var specifications = document.querySelector("#struct-customMoreProperty > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > ul > li:nth-child(2) > span:nth-child(2) > input[type=text]", document);
var Capacity = document.querySelector("#struct-customMoreProperty > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > ul > li:nth-child(4) > span:nth-child(2) > input[type=text]", document);
var Voltage =document.querySelector("#struct-customMoreProperty > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > ul > li:nth-child(5) > span:nth-child(2) > input[type=text]");
var Size = document.querySelector("#struct-customMoreProperty > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > ul > li:nth-child(6) > span:nth-child(2) > input[type=text]", document);
changeContent(specifications , str_specifications);
changeContent( Capacity, str_Capacity+"mah");
changeContent(Voltage , str_Voltage+"v");
changeContent( Size, "H"+str_sizeH+"mm*W"+str_sizeW+"mm*L"+str_sizeL+"mm" );





var edingrongliang = document.querySelector("#struct-saleProp > div:nth-child(2) > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > ul > li > span > input[type=text]", document);
var edingdianya = document.querySelector("#struct-saleProp > div:nth-child(3) > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > ul > li > span > input[type=text]", document);

changeContent(edingrongliang , str_Capacity+"mah");
changeContent(edingdianya , str_Voltage+"v");



//交易信息

var fob1 =document.querySelector("#struct-ladderPrice > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > div:nth-child(1) > div > div.next-table.ladder-price-table.only-bottom-border > div > div.next-table-body > table > tbody > tr.next-table-row.first > td:nth-child(2) > div > div > span.sell-o-number > span > span > input[type=text]") ;
var fob2 =document.querySelector("#struct-ladderPrice > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > div:nth-child(1) > div > div.next-table.ladder-price-table.only-bottom-border > div > div.next-table-body > table > tbody > tr:nth-child(2) > td:nth-child(2) > div > div > span.sell-o-number > span > span > input[type=text]") ;
var fob3 = document.querySelector("#struct-ladderPrice > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > div:nth-child(1) > div > div.next-table.ladder-price-table.only-bottom-border > div > div.next-table-body > table > tbody > tr.next-table-row.last > td:nth-child(2) > div > div > span.sell-o-number > span > span > input[type=text]") ;


changeContent(fob1 , "1.48");
changeContent(fob2 , "1.25");
changeContent(fob3 , "0.85");

//物流信息
document.querySelector("#struct-logisticsMode > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > span > span:nth-child(1) > label > label > input[type=checkbox]").click();
document.querySelector("#struct-logisticsMode > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > span > span:nth-child(3) > label > label > input[type=checkbox]").click();
document.querySelector("#struct-logisticsMode > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > span > span:nth-child(4) > label > label > input[type=checkbox]").click();

//测试评分按钮
document.querySelector("#struct-productQuality > div > div.score-block > div").click();


//产品描述 点击浏览 选中一个主图 可瞬间再点击浏览！点两次哦！ 再直接划拉其余全部
var uploadpics = document.querySelector("#struct-scImages > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > div > div.trigger-wrapper > div > span.upload-select-inner > button", document);

///////////////////////
//预览效果部分可能需要重新运行！
///（1）xpath版本：容易出现问题：TypeError: Cannot set property 'innerText' of null
//  解决方案！evaluate和赋值分开运行！
// No！ 实际上还是xpath缓冲不到的问题，先弄图片，等20秒再运行脚本！
var table_moder = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[2]/td[2]/div[1]/div',document).iterateNext();
var table_size = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[3]/td[2]/div[1]/div',document).iterateNext();
var table_voltage =document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[4]/td[2]/div[1]/div',document).iterateNext();
var table_capacit =document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[5]/td[2]/div[1]/div',document).iterateNext();
var table2_specifications = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[2]/td[2]/div[1]/div',document).iterateNext();
var table2_capacity= document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[2]/td[3]/div[1]/div',document).iterateNext();
var table2_voltage= document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[3]/td[3]/div[1]/div',document).iterateNext();
var table2_impedance = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[6]/td[3]/div[1]/div',document).iterateNext();


var informat = "703037 700 3.7 7 30 37";
var str_product_title = "abc"; 
var str_key_words ="abc";
arr=informat.split(" ");
var str_specifications=arr[0];
var str_Capacity = arr[1];
var str_Voltage = arr[2];
var str_sizeH = arr[3];
var str_sizeW = arr[4];
var str_sizeL = arr[5];

table_moder.innerText = str_specifications;
table_size.innerText = str_sizeH+"*"+str_sizeW+"*"+str_sizeL+"(mm)";
table_voltage.innerText = str_Voltage+"v";
table_capacit.innerText = str_Capacity;


table2_specifications.innerHTML= "Specifications("+str_specifications+")";
table2_capacity.innerHTML="capacity:"+str_Capacity+"mAh";
table2_voltage.innerHTML=str_Voltage+"v";
table2_impedance.innerHTML="≤100mΩ";

///////////////////////
//预览效果部分可能需要重新运行！
///（2）jspath版本：容易出现问题：js id会改变！ 必须一次保存！
///改变好像过于频繁，放弃！

