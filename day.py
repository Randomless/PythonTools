import sys
import argparse

def get_num_of_days_in_month(month):
    # 给定年月返回月份的天数
    if month in (1, 3, 5, 7, 8, 10, 12):
        return 31
    elif month in (4, 6, 9, 11):
        return 30
    else:
        return 28

def main():


    parser = argparse.ArgumentParser(description="input year , month , xq of first day")    
    parser.add_argument('-year',type=int,default=2019)
    parser.add_argument('-month',type=int,default=8)
    parser.add_argument('-xqFirstDay',type=int,default=3)
    arg = parser.parse_args()
    
    week_day_dict = {
        1 : '星期一',
        2 : '星期二',
        3 : '星期三',
        4 : '星期四',
        5 : '星期五',
        6 : '星期六',
        7 : '星期日',
         }
    num_days_mon=get_num_of_days_in_month(arg.month)

    with open('days.txt','w') as f:
        
        for i in range(num_days_mon):
            xq=i%7+arg.xqFirstDay if i>7 else arg.xqFirstDay+i
            if xq>=8:
                xq=xq%7
            xq_str=week_day_dict[xq]
            date=i+1
            line='{0}.{1}.{2} 晴 {3} \n \n'.format(arg.year,arg.month,date,xq_str)
            f.write(line)


if __name__ == '__main__':
    main()

