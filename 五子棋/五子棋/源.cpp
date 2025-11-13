#include<windows.h>
#include<stdio.h>
#include<graphics.h>
#include <mmsystem.h>
#pragma comment(lib,"winmm.lib")
#include <math.h>
int chessmap[20][20] = { 0 };
int flag = 0;
void initgame()
{
	//绘制窗口
	initgraph(600, 500,SHOWCONSOLE);
	//插入图片
	loadimage(NULL, "bk.png");
	//绘制棋盘
	setlinecolor(BLACK);
	for (int i = 1;i < 20;i++)
	{
		line(0, i * 25, 500, i * 25);
		line(i * 25, 0, i * 25, 500);
	}
	setlinestyle(PS_SOLID, 2);
	line(500, 0, 500, 500);
	//输入文字
	//设置透明
	setbkmode(0);
	settextcolor(BLUE);
	outtextxy(510, 80, "player1:white");
	outtextxy(510, 160, "player2:black");
}
int judge(int mapx, int mapy)
{	
	int temp = 2 - flag % 2;
	for (int i = mapx - 4, j = mapy;i <= mapx;i++)
	{
		
		if (i >= 1 && i < 16 && temp == chessmap[i][j] && temp == chessmap[i + 1][j] &&temp == chessmap[i + 2][j] &&temp == chessmap[i + 3][j] &&temp == chessmap[i + 4][j])
		{
			return 1;
		}
		
	}
	for (int i = mapx, j = mapy-4;j <= mapy;j++)
	{

		if (j >= 1 && j < 16 && temp == chessmap[i][j+4] && temp == chessmap[i][j+3] && temp == chessmap[i][j+2] && temp == chessmap[i][j+1] && temp == chessmap[i][j])
		{
			return 1;
		}

	}
	for (int i = mapx-4, j = mapy - 4;j <= mapy;j++)
	{

		if (i >= 1 && i < 16&&j >= 1 && j < 16 && temp == chessmap[i+4][j + 4] && temp == chessmap[i + 3][j + 3] && temp == chessmap[i + 2][j + 2] && temp == chessmap[i + 1][j + 1] && temp == chessmap[i][j])
		{
			return 1;
		}

	}
	for (int i = mapx+4, j = mapy - 4;j <= mapy;j++)
	{

		if (i>4 &&i <24 &&j >= 1 && j < 16 && temp == chessmap[i-4][j + 4] && temp == chessmap[i-3][j + 3] && temp == chessmap[i-2][j + 2] && temp == chessmap[i-1][j + 1] && temp == chessmap[i][j])
		{
			return 1;
		}

	}
	return 0;
}
void playgame()
{
	int mapx = 0;
	int mapy = 0;
	HWND hwnd = GetHWnd();
	MOUSEMSG Msg;
	
	int chessx = 0;
	int chessy = 0;
	while (1)
	{
		Msg = GetMouseMsg();
		for (int i = 1;i < 20;i++)
		{
			for (int j = 1;j < 20;j++)
			{
				if (abs(Msg.x - i * 25) <= 12 && abs(Msg.y - j * 25) <= 12)
				{
					chessx = i * 25;
					chessy = j * 25;
					mapx = i;
					mapy = j;
				}
			}
		}
		
		if (Msg.uMsg == WM_LBUTTONDOWN)
		{
			if (chessmap[mapx][mapy] != 0)
			{
				MessageBox(hwnd, "走开", "五子棋", MB_OK);
				continue;
			}
			if (flag % 2 == 0)
			{
				setfillcolor(BLACK);
				solidcircle(chessx, chessy, 10);
				chessmap[mapx][mapy] = 1;
			}
			else
			{
				setfillcolor(WHITE);
				solidcircle(chessx, chessy, 10);
				chessmap[mapx][mapy] = 2;
			}
			flag++;
		}
	
		if (judge(mapx, mapy))
		{
			if (1 == flag % 2)
			{
				MessageBox(hwnd, "玩家1black获胜", "GAME OVER", MB_OK);
				return;
			}
			else
			{
				MessageBox(hwnd, "玩家2white获胜", "GAME OVER", MB_OK);
				return;
			}
		}
	}
}
int main()
{
	mciSendString("play mitacap.mp3", 0, 0, 0);
	initgame();
	
	playgame();

	closegraph();
	return 0;
}
