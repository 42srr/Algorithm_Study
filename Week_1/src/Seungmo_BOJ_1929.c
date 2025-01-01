#include <stdio.h>

int	is_prime(int m)
{
	int	i = 2;
	if (m < 2)
		return (0);
	if (m == 2)
		return (1);
	while(i <= m / i)
	{
		if (m % i == 0)
			return (0);
		i++;
	}
	return (1);
}

int main(void)
{
	int	input;
	int	m;
	int	n;
	int	count;

	scanf("%d", &input);
	while (m <= n)
	{
		if (is_prime(m) == 1)
			printf("%d\n", m);
		m++;
	}
	return (0);
}