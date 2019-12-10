#!/usr/bin/env python
# -*- encoding: utf-8 -*-
'''
@File    :   autowebclick.py
@Time    :   2019/12/10 14:28:50
@Author  :   Zhao Zhitao 
@software:   VS Code
@说明： 国科大教务系统-教师评估脚本
@Desc    :   调用chromedirver.exe 打开chrome  
            step1：校园网下自动登录 手动打开到评教页面 点开一个评教老师
            step2：只需添加一个断点 Line123    res=click_buttons_part1_part3() 
                 注意execute js脚本来score到目标不行！ 评教系统页面会移动过头！
            step3：每F5 Continue一下 即评估一个教师
'''


from selenium import webdriver
import time

browser = webdriver.Chrome()
browser.get(url='http://sep.ucas.ac.cn/')
browser.maximize_window()
input_name = browser.find_element_by_id('userName').send_keys('2418660459@qq.com')
input_password = browser.find_element_by_id('pwd').send_keys('zzt305603147')
input_login=browser.find_element_by_id('sb').click()

#js = "window.open('http://jwxk.ucas.ac.cn/notice/view/1')"
#browser.execute_script(js)

#browser.get(url='http://sep.ucas.ac.cn/')

print(browser.window_handles)#打印当前所有窗口句柄
n = browser.window_handles  # 获取当前页所有窗口句柄
print(n)
# browser.switch_to.window(n[1]) #切换到第二页


def click_buttons():
    buttons_xpath=['//*[@id="regfrm"]/table/tbody/tr[2]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[3]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[5]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[6]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[8]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[9]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[10]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[11]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[12]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[13]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[15]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[16]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[17]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[18]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[19]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[20]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[22]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[23]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[24]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[25]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[26]/td[1]/input',
                   ]
    for item in buttons_xpath:
        if browser.find_element_by_xpath(item):
            input = browser.find_element_by_xpath(item)
            browser.execute_script("arguments[0].scrollIntoView();",input) 
            input.click()
        else:
            print('Item %s not found\n' % item)
    return 0

def click_buttons_part1_part3():
    browser.execute_script("window.scroll(0,130);") 
    buttons_xpath=['//*[@id="regfrm"]/table/tbody/tr[2]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[3]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[5]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[6]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[8]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[9]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[10]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[11]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[12]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[13]/td[1]/input',
                   ]
    for item in buttons_xpath:
        if browser.find_element_by_xpath(item):
            input = browser.find_element_by_xpath(item).click()
        else:
            print('Item %s not found\n' % item)
    return 0

def click_buttons_part4_part5():
    browser.execute_script("window.scroll(0,700);") 
    buttons_xpath=['//*[@id="regfrm"]/table/tbody/tr[15]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[16]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[17]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[18]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[19]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[20]/td[1]/input',

                    '//*[@id="regfrm"]/table/tbody/tr[22]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[23]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[24]/td[1]/input','//*[@id="regfrm"]/table/tbody/tr[25]/td[1]/input',
                    '//*[@id="regfrm"]/table/tbody/tr[26]/td[1]/input',]
    for item in buttons_xpath:
        if browser.find_element_by_xpath(item):
            input = browser.find_element_by_xpath(item).click()
        else:
            print('Item %s not found\n' % item)
    return 0


def input_boxs():
    # boxs_xpath=['//*[@id="item_43"]','//*[@id="item_44"]']    # 定位输入框xpath
    browser.execute_script("window.scroll(0,1200);") 
    input1= browser.find_element_by_xpath('//*[@id="item_43"]')    
    input1.send_keys("老师的教学能够激发我的学习兴趣，鼓励启发我们质疑和创新，灵活运用多种教学工具和教学策略")
    input2=browser.find_element_by_xpath('//*[@id="item_44"]')
    input2.send_keys("更注重培养我们的动手能力或创作能力，更多组织学生积极地参与讨论，更多在网上进行课后答疑")
    return 0

def click_save():
    save_all=browser.find_element_by_xpath('//*[@id="sb1"]').click()
    time.sleep(0.5)
    certain_save=browser.find_element_by_xpath('//*[@id="jbox-state-state0"]/div[2]/button[1]').click()
    return 0

def scrollInto_target():
    target = browser.find_element_by_xpath('//*[@id="regfrm"]/table/tbody/tr[15]/td[1]/input')
    browser.execute_script("arguments[0].scrollIntoView();",target) 
    target.click()
    print('Done')
    return 0

def eval():
    print(browser.current_url)
    res=click_buttons_part1_part3() 
    res=click_buttons_part4_part5()
    res=input_boxs()
    res=click_save()
    return 0


print(browser.current_url)

def testscroll(dy_coord):
    # window.scroll(x-coord, y-coord)  // 参数表示想要置于左上角的像素点的横纵坐标
    browser.execute_script("window.scroll(0,arguments[0]);",dy_coord) 
    return 0

# testscroll(130)
# testscroll(700)
# testscroll(1200)

for i in range(10):
    ans=eval() 


browser.close()