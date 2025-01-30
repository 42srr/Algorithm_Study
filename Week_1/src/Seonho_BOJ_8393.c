#include <stdio.h>

int	main(void)
{
	int	n;
	int	sum;

	scanf("%d", &n);
	sum = 0;
	while (n > 0)
		sum += n--;
	printf("%d", sum);
	return (0);
}
