#define _CRT_SECURE_NO_WARNINGS
#include <graphics.h>
#include <stdio.h>
#include <time.h>
#include <stdlib.h>
#define N 5
int map[N];
int mapx, mapy, score = 0;
void initblack()
{
	for (int i = 0;i < N - 1;i++)
	{
		map[i] = rand() % N; //0-4
		printf("%d\n", map[i]);
	}
}
void draw()
{
	BeginBatchDraw();
	//清屏
	cleardevice();
	setlinecolor(BLACK);//设置边框 (先设置边框）
	setfillcolor(WHITE);
	int i = 0;
	for (i = 0;i < 4;i++)//hang
	{
		for (int j = 0;j < 5;j++)//lie
		{
			fillrectangle(j * 100, i * 120, j * 100 + 100, i * 120 + 120);
		}
	}
	setfillcolor(BLACK);
	for (int i = 0; i < 4; i++)
		fillrectangle(map[i] * 100, i * 120, map[i] * 100 + 100, i * 120 + 120);
	EndBatchDraw();
}
bool play()
{
	MOUSEMSG msg;
	msg = GetMouseMsg();
	switch (msg.uMsg)
	{
		case WM_LBUTTONDOWN:
		mapx = msg.x / 100;
		mapy = msg.y / 120;
		if (map[3] == mapx && mapy == 3)
		{
			printf("点到黑块了！分数加1\n");
			score += 1;
			for (int i = 3;i >= 0;i--)
				map[i] = map[i - 1]; 
			map[0] = rand() % N;
		}
		else
		{
			printf("别踩白块口牙\n");
			score -= 1;
			return true;
		}
		printf("%d\n", score);

		break;
	}
	return false;
}
int main()
{	
	srand((unsigned)time(NULL));
	initgraph(500,480,SHOWCONSOLE);

	initblack();
	while (1)
	{
		draw();
		if (play())
		{
			char str[128];
			sprintf(str, "你的分数是：%d",score);
			MessageBox(GetHWnd(), str, "game over", MB_OK);
			exit(0);
		}
	}
	//卡屏。
	getchar();
	return 0;
}