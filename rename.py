# 使用save_data.pkl内string批量重命名hmtl
#!/usr/bin/env python
# -*- encoding: utf-8 -*-
'''
@File    :   rename.py
@Time    :   2019/10/19 23:49:01
@Author  :   Zhao Zhitao 
@Contact :   2418660459@qq.com
@software:   VS Code
@License :   (C)Copyright 2017-2018, Liugroup-NLPR-CASIA
@Desc    :   None
'''

import os
import random
import pickle
import logging

logging.basicConfig(level=logging.DEBUG,filename='logging.log')
logger = logging.getLogger(__name__)
 
logger.info('This is a log info for NAME.py')

save_data="./save_data.pkl"
f_namelist=[]

with open(save_data,"rb") as f:
    f_namelist=pickle.load(f)


for dirpath,_,filenames in os.walk('./'):
    for oldname,time,title in f_namelist:
        #if title:  
        newname=time+" "+title+".htm"
        if newname not in filenames: #防止重命名
            try:
                os.rename(oldname,newname)
            except Exception as e:
                print(e)
                logger.info(e)
                continue
                #print('rename dir fail\r\n')\
        elif newname in filenames:
            logger.info(newname," already exist")