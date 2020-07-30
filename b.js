//物流信息
document.querySelector("#struct-logisticsMode > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > span > span:nth-child(1) > label > label > input[type=checkbox]").click();
document.querySelector("#struct-logisticsMode > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > span > span:nth-child(3) > label > label > input[type=checkbox]").click();
document.querySelector("#struct-logisticsMode > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > span > span:nth-child(4) > label > label > input[type=checkbox]").click();

//点击编辑页面？
document.querySelector("#struct-magicEditor > div > div.next-col.next-col-20.oly-col-container > div.sell-info > div > div > div > div > div.next-row.pre-header > div.next-col.next-col-18.icbu-sell-detail-tips > div > button", document).click();


let sleep = function (time) {
    let now = Date.now() // 获取当前毫秒数
    // 设置while循环，循环条件为：实时时间减去记录时间小于3s，否则则循环结束
    while(Date.now() - now < time){}
}
console.log('beforeSleep')
sleep(10000)
console.log('afterSleep') 
////////////////////////////////////////////

//信息字符串：产品型号 容量 电压 尺寸（H） 尺寸（W） 尺寸（L）
var informat = "703037 700 3.7 7 30 37";
arr=informat.split(" ");
var str_specifications=arr[0];
var str_Capacity = arr[1];
var str_Voltage = arr[2];
var str_sizeH = arr[3];
var str_sizeW = arr[4];
var str_sizeL = arr[5];

///表格
var table_moder = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[2]/td[2]/div[1]/div',document).iterateNext();
var table_size = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[3]/td[2]/div[1]/div',document).iterateNext();
var table_voltage =document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[4]/td[2]/div[1]/div',document).iterateNext();
var table_capacit =document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[2]/div[1]/div[1]/div/div/div/div[2]/div/div/table/div/div/div/table/tbody/tr[5]/td[2]/div[1]/div',document).iterateNext();
table_moder.innerText = str_specifications;
table_size.innerText = str_sizeH+"*"+str_sizeW+"*"+str_sizeL+"(mm)";
table_voltage.innerText = str_Voltage+"v";
table_capacit.innerText = str_Capacity;

var table2_specifications = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[2]/td[2]/div[1]/div',document).iterateNext();
var table2_capacity= document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[2]/td[3]/div[1]/div',document).iterateNext();
var table2_voltage= document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[3]/td[3]/div[1]/div',document).iterateNext();
var table2_impedance = document.evaluate('/html/body/div/div/div[2]/div[2]/div[2]/div/div/div[5]/div[1]/div[1]/div/div/table/div/div[1]/div/table/tbody/tr[6]/td[3]/div[1]/div',document).iterateNext();

table2_specifications.innerHTML= "Specifications("+str_specifications+")";
table2_capacity.innerHTML="capacity:"+str_Capacity+"mAh";
table2_voltage.innerHTML=str_Voltage+"v";
table2_impedance.innerHTML="≤100mΩ";


//cdn导入
<script src="https://cdn.bootcss.com/typed.js/2.0.5/typed.js"></script>

var importJs=document.createElement('script')//在页面新建一个script标签
importJs.setAttribute("type","text/javascript")//给script标签增加type属性
importJs.setAttribute("src", 'https://cdn.bootcss.com/typed.js/2.0.5/typed.js') //给script标签增加src属性， url地址为cdn公共库里的
document.getElementsByTagName("head")[0].appendChild(importJs)

var typed = new Typed('#struct-p-191284004 > div.sell-catProp-struct > div.content > span > input[type=text]');

var importJs=document.createElement('script')//在页面新建一个script标签
importJs.setAttribute("type","text/javascript")//给script标签增加type属性
importJs.setAttribute("src", 'https://cdn.bootcss.com/typed.js/2.0.5/typed.js') //给script标签增加src属性， url地址为cdn公共库里的
document.getElementsByTagName("head")[0].appendChild(importJs)

var importJs=document.createElement('script')//在页面新建一个script标签
importJs.setAttribute("type","text/javascript")//给script标签增加type属性
importJs.setAttribute("src", 'https://ajax.microsoft.com/ajax/jquery/jquery-1.8.3.min.js') //给script标签增加src属性， url地址为cdn公共库里的
document.getElementsByTagName("head")[0].appendChild(importJs)

$('#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]').click();

var dianchiguige = document.querySelector("#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]", document);
dianchiguige.click= dianchiguige.css

$('#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]').click=$('#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]').css("background-color","yellow")
$('#struct-p-191286002 > div.sell-catProp-struct > div.content > span > input[type=text]').onclick=$('#struct-p-191286002 > div.sell-catProp-struct > div.content > span > input[type=text]').css("background-color","yellow")

var dianchiguige = document.querySelector("#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]", document);
dianchiguige.select();
document.execCommand( "insertHTML", false, "aaa" || "")  ? 'successful' : 'unsuccessful'

var dianchiguige = document.querySelector("#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]", document);
dianchiguige.select();
document.execCommand('Paste',0,"asdf") ? 'successful' : 'unsuccessful'

var dianchiguige = document.querySelector("#struct-p-200000926 > div.sell-catProp-struct > div.content > span > input[type=text]", document);
dianchiguige.select();
document.execCommand('insertHTML',"ffff") ? 'successful' : 'unsuccessful'


function changeContent(obj,str) {
    obj.select();
    document.execCommand('insertHTML',false,str|| "") ? 'successful' : 'unsuccessful'
    sleep(2000)
}