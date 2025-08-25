"""Tests for the main module."""

import pytest
from my_python_project.main import hello, add


def test_hello():
    """Test the hello function."""
    assert hello("World") == "Hello, World!"
    assert hello("Python") == "Hello, Python!"


def test_add():
    """Test the add function."""
    assert add(1, 2) == 3
    assert add(-1, 1) == 0
    assert add(0, 0) == 0


def test_add_with_large_numbers():
    """Test the add function with large numbers."""
    assert add(10000, 20000) == 30000