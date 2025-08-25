"""Main module for my_python_project."""


def hello(name: str) -> str:
    """Return a greeting message.

    Args:
        name: The name to greet.

    Returns:
        A greeting message.
    """
    return f"Hello, {name}!"


def add(a: int, b: int) -> int:
    """Add two numbers together.

    Args:
        a: First number.
        b: Second number.

    Returns:
        The sum of a and b.
    """
    return a + b


if __name__ == "__main__":
    print(hello("World"))
    print(f"2 + 3 = {add(2, 3)}")