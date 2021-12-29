package visitor;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

enum Operation
{
	BACK,FORWORD,VISIT,QUIT
}
public class JavaStudy1 {
	public static void main(String[] args) {
//		String[] initList = null;
		 List<String> backUrlList = new ArrayList<String>();
		 backUrlList.add("http://www.acm.org/");
		 List<String> forwardUrlList = new ArrayList<String>();
		 //接受String类型
		 Scanner input=new Scanner(System.in);
		 String str=null;
		 while(!(str=input.nextLine()).equals("QUIT")){
				if(str.contains("VISIT")) {
					String url = str.substring(5);
					backUrlList.add(url);
					System.out.println(url);
					continue;
				}
				switch(str) {
				
				case "BACK":
					//do back
					if(backUrlList.size()==0) {
						System.out.println("Ignored");
						break;
					}
//					backUrlList.remove(backUrlList.size()-1);
					String backUrl = backUrlList.remove(backUrlList.size()-1);
					forwardUrlList.add(backUrl);
					System.out.println(backUrl);
					break;
				case "FORWARD":
					//do forward
					if(forwardUrlList.size()==0) {
						System.out.println("Ignored");
						break;
					}
					String forwardUrl = forwardUrlList.remove(0);
					backUrlList.add(forwardUrl);
					System.out.println(forwardUrl);
					break;
//				case "QUIT":
//					try {
//						backUrlList.clear();
//						forwordUrlList.clear();
//					} catch (Exception e) {
//						// TODO Auto-generated catch block
//						e.printStackTrace();
//					}
//					break;
				default:
					System.out.println("the input "+str+" is illgeal");
					break;
				}
		 }
		
	}


}
