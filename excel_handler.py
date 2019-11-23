import  pandas  as pd


df=pd.read_excel('./123.xlsx')#这个会直接默认读取到这个Excel的第一个表单
data=df.head()#默认读取前5行的数据
#data=df.values#获取所有的数据，注意这里不能用head()方法哦~
print("获取到所有的值:\n{0}".format(data))#格式化输出

df.fillna(0,inplace=True)
#print(df)

df.to_excel('ans.xlsx')

print('changeOK!')
# # 复制原文件，因为原文件只能读取，不能写入数据，所以要复制得到一个可以写入数据的文件
# newwb = xlwt
# newwb = copy(wb)
# # 获取可写文件的第一张表单
# newsheet = newwb.get_sheet(0)
# try:
#     for row in range(1,10):
#         # 遍历每一行，当8列的值小于12时，就把该值改为0
#         if sheet.cell(row,7).value < 12:
#             newsheet.write(row, 7, 0)
# except:
#     print("")

# newwb.save('1.xls')
