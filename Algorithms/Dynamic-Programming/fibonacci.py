import unittest

memo = {}


def fib(n):
    if n < 0:
        raise Exception(f"Invalid input: {n}")

    if n == 0:
        return 0

    if n == 1:
        return 1

    if n in memo:
        return memo[n]

    current_fib_number = fib(n - 1) + fib(n - 2)
    memo[n] = current_fib_number

    return current_fib_number


class Test(unittest.TestCase):
    def test_fib(self):
        with self.assertRaises(Exception):
            fib(-1)
        self.assertEqual(fib(9), 34)
        self.assertEqual(fib(50), 12586269025)
        self.assertEqual(fib(10), 55)
        self.assertEqual(fib(0), 0)
        self.assertEqual(fib(1), 1)
        self.assertEqual(fib(6), 8)
        self.assertEqual(fib(37), 24157817)
        self.assertEqual(fib(2), 1)


if __name__ == "__main__":
    unittest.main()
