from string import Template
 
class ReportCppGenerator(object):
    '''
    classdocs
    '''
 
    def __init__(self):
        '''
        Constructor
        '''
    
    def generate(self, fileName):
        
        print("Generate Start")
        
        #1 将传入的class的名称创建对应的head 和 cpp文件
        cppFilePath = './%s.cpp' % fileName
 
        
        cpp_class_file = open(cppFilePath,'w')
 
        cppLines = []
 
        # 2.模版文件
        template_cpp_file = open('./report_cpp.template','r')
        cpp_tmpl = Template(template_cpp_file.read())
        
        # 2.模板进行转换
        cppLines.append(cpp_tmpl.substitute(CLASSNAME = fileName))
 
        # 3.将生成的代码写入文件
        cpp_class_file.writelines(cppLines)
        cpp_class_file.close()
        

if __name__ == '__main__':
    
    with open('./Names.txt', 'w') as f:
        for i in range(4,5):
            for j in range(1,5):
                chars=[chr(i) for i in range(65,70)]#所有大写字母
                for k in chars:
                    f.write("{0}-{1}-{2}".format(i,j,k))
                    f.write('\n')
    # 初始化报表创建类
    report_gen = ReportCppGenerator()
    
    # 配置文件加载所需创建的名称
    configFilePath = './Names.txt'
    cpp_class_file = open(configFilePath,'r')
    
    lines = []
    
    while 1: 
        line = cpp_class_file.readline() 
        if not line: 
            break
        else:
            line = line.strip('\n')
            print(line)
            report_gen.generate(line)
            lines.append(line)   