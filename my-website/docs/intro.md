---
sidebar_position: 1
author: Anton
---

# Fixing problems in a file in IntelliJ IDEA

This short tutorial will show you how to find and fix problems in your Java file using IntelliJ IDEA.


### What problems IntelliJ IDEA can find

IntelliJ IDEA automatically inspects the open file and highlights all elements of code that require correction or can be improved. In IntelliJ IDEA, such elements are known as *problems*.  

Each problem has a severity level, which depends on the impact that the problem has on your program. This includes **Errors** (problems that break your program, such as the use of undeclared variables), **Warnings** (places for improvement, violations of programming style guides), and **Typos**.  
For more detailed description of severity levels, refer to [Change inspection severity](https://www.jetbrains.com/help/idea/configuring-inspection-severities.html).

### Opening your file in IntelliJ IDEA

Firts, let's open your Java file in IntelliJ IDEA. If its' already open, you can skip ahead to [identifying problems](#identifying-problems).

To open a file in in IntelliJ IDEA:
1. Launch IntelliJ IDEA.
2. In the welcome screen that opens, click **Open**.
3. Select the directory with your Java file and click **Open**.  
  This will open the IntelliJ IDEA main window. You directory structure is displayed on the left side of the window, in the **Project** tool window.
4. If the **Project JDK is not defined** message is displayed, click **Setup SDK** in the top right corner of the editor and select a JDK.

At this point, your IntelliJ IDEA should look similar to the following:

![IDEA main window](/img/idea_main_window.jpg)

### Identifying problems

To identify all problems in your file:
1. Press **⌘6**.  
  This will open the **Problems** tab in the lower left corner.
2. Select the **Current File** tab to view only errors found in the file that is currently open in the editor window.   

<img
  src={require('/img/idea_errors_list.jpeg').default}
  alt="List of problems"
  className="smallimg"
/>

3. Double-click a problem on the list.  
  This will move your caret to the piece of code where the problem was found.

:::tip Tip

The overall status of problem inspection is also shown at the top right of the editor window.

:::
  
### Fixing problems

Besides manually modifying your source code, you can fix problems using IntelliJ IDEA *quick fixes*.

To fix problems:
1. In the **Problems** tab, right-click a problem.
2. In the popup window, click **Show Quick Fixes**.
3. Select one of the quick fixes. 
<img
  src={require('/img/idea_quick_fixes.jpeg').default}
  alt="Quick fixes"
  className="smallimg"
/>

:::note Note

The **Show Quick Fixes** can be unavailable if correcting an error requires an in-depth analysis of your code. In this case, you should fix the errors manually.

:::

### Further readings

You can get much more from IntelliJ IDEA 
IntelliJ IDEA can automate the process of problem fixing: correct all found problems at once, correct them before committing to Git or when you save the file. For more information, refer to [Clean up your code](https://www.jetbrains.com/help/idea/resolving-problems.html#clean-up-code).
