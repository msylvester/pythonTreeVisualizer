## VizTreeTraversal 
 
Often, LeetCode problems require a slight learning curve to feel comfortable using their TreeNode data structure. One helpful portion of the LeetCode website describes a detailed example. Have a look at the linked content [here](https://support.leetcode.com/hc/en-us/articles/360011883654-What-does-1-null-2-3-mean-in-binary-tree-representation)



## Using the product 

The goal of this product is to provide a library that will return a TreeNode object that can be traversed visually. Such an example is shown among the FAQ's on the Leetcode website. in short, this library which is on PIP aims to provide a visual much like this ![leetcode graph visual](https://support.leetcode.com/hc/article_attachments/360021719613/Screen_Shot_2018-12-26_at_4.45.25_PM.png)


To install, use pip and the command land as follows: 

```bash
pip install viztraverse
```

Once installed you can import the library as follows:
```bash
import viztraverse from viztraverse
```

Then to use the serialize library:
```bash
viztraverse.deserialize([1,1,null,1]); 
```

And, finally to draw: 
```bash
viztraverse.draw(viztraverse.deserialize([1,1,null,1]); 
```


## Troubleshooting
In order to draw, the _turtle_ library is imported. Among potential problems include MacOS users recievving an error regarding a _tkanner_ mooduel not found. The fix is quite straight forward with brew. For more information you can visit this [link](https://formulae.brew.sh/formula/python-tk@3.9). Though, entering the following command will likely solve the problem. 

```bash
brew install python-tk@3.9
```
## Forking
More than willing to work with folks who want to add features. No immediate goals but for a set of tests. If you have ideas you can include them in your Pull Requests. 


## Credit
A Leet Code user named _StefanPochmann_ wrote the entire code. You can view the original post [here](https://leetcode.com/problems/recover-binary-search-tree/discuss/32539/Tree-Deserializer-and-Visualizer-for-Python). For my part, I simply took the necessary steps to put it online. 









