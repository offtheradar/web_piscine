function ft_is_sort (lst) {
	return (lst.every((val, i, arr) => !i || val >= arr[i - 1]));
}
