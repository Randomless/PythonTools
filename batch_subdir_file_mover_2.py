import os,shutil
import re

def move(filename,desfolder):
    if not os.path.exists(os.path.dirname(desfolder)):
        os.makedirs(os.path.dirname(desfolder))
    if os.path.exists(desfolder):
        try:
            shutil.copy(filename,desfolder)#如果要改为移动，而不是拷贝，可以将copy改为move
            print("success with "+filename)
        except:
            print("fail with "+filename)

# ./wha 共87个
def get_filelist(path):
    Filelist = []
    for home, dirs, files in os.walk(path):
        for dir in dirs:
            print(dir)
            if re.match("^[\u4E00-\u9FA5A-Za-z0-9_]+L19$",dir):
                print("moving certain level...")
                filename_png="./"+dir+"/"+dir+".png"
                filename_tif="./"+dir+"/"+dir[:-4]+".tif"
                move(filename_png,desfolder)
                move(filename_tif,desfolder)
            # dir=dir+"\\Level19\\"+dir+".tif"
            # Filelist.append(os.path.join(home, dir))
    return Filelist

sourcefolder='./'
desfolder='./out19'
filelist=get_filelist(sourcefolder)

# for filename in filelist:
#     print(filename)

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