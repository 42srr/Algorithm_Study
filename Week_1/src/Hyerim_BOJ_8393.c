#include <stdio.h>

int main(void)
{
	int total = 1;
	int given_number = 0;
	
	scanf("%d", &given_number);
	if (given_number > 1)
	{
		if (given_number % 2 == 0)
			total = (given_number + 1) * (given_number / 2);
		else
			total = ((given_number + 1) * (given_number / 2)) + ((given_number / 2) + 1);
	}
	printf("%d\n", total);
	return 0;
}

