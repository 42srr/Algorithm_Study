#include <stdio.h>

int main (void)
{
	int	input;
	int	i;
	int	num;

	i = 1;
	num = 0;
	scanf("%d", &input);
	while (i <= input)
	{
		num += i;
		i++;
	}
	printf("%d", num);
}