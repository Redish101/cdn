import setuptools

with open("README.md", "r", encoding="utf-8") as fh:
    long_description = fh.read()

setuptools.setup(
    name="pyqi-v1",
    version="1.1.1",
    author="Redish101",
    author_email="jiayunluo@outlook.com",
    description="It can help you quicker install python",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/redish101/pyqi",
    project_urls={
        "Bug Tracker": "https://github.com/Redish101/pyqi/discussions",
    },
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    package_dir={"": "src"},
    packages=setuptools.find_packages(where="src"),
    python_requires=">=3.6",
)