import os,shutil

# ./wha 共87个
def get_filelist(path):
    Filelist = []
    for home, dirs, files in os.walk(path):

        for dir in dirs:
            print(dir)
            dir=dir+"\\Level19\\"+dir+".tif"
            Filelist.append(os.path.join(home, dir))

    return Filelist

sourcefolder='.\wha'
desfolder='./out19'
filelist=get_filelist(sourcefolder)

# filelist=GetExtNamesList(all_path(sourcefolder),'.tiff')#此处例子是htm，可以改为其他类型

for filename in filelist:
    print(filename)

for file in filelist:
    print(file)
    file=file.replace('\\','/')
    desfilename=desfolder #file.replace('\\','/').replace(sourcefolder,desfolder)
    print(file)

    print(desfilename)
    if not os.path.exists(os.path.dirname(desfilename)):
        os.makedirs(os.path.dirname(desfilename))
    if os.path.exists(desfilename):
        try:
            shutil.copy(file,desfilename)#如果要改为移动，而不是拷贝，可以将copy改为move
        except:
            print("fail with "+file)