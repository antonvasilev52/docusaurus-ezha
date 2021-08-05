---
sidebar_position: 1
author: Anton
---

# Fixing code problems in IntelliJ IDEA

This tutorial shows you how to find and fix problems in your Java file using IntelliJ IDEA.


### What problems IntelliJ IDEA can find

IntelliJ IDEA automatically inspects the code quality of the open file and highlights all elements of code that require correction or can be improved. In IntelliJ IDEA, such elements are known as *problems*.  

Each problem has a severity level, which depends on the impact that the problem has on your program. Problems include **Errors** (problems that break your program, such as the use of undeclared variables), **Warnings** (places for improvement, violations of programming style guides), and **Typos** (spelling errors).  
For more detailed description of severity levels, refer to [Change inspection severity](https://www.jetbrains.com/help/idea/configuring-inspection-severities.html).

### Opening your file in IntelliJ IDEA

First, let's open your Java file in IntelliJ IDEA. If it's already open, you can skip ahead to [finding problems](#identifying-problems).

To open a file in IntelliJ IDEA:
1. Launch IntelliJ IDEA.
2. In the welcome screen that opens, click **Open**.
3. Select the directory with your Java file and click **Open**.  
  This will open the IntelliJ IDEA main window. Your directory structure is displayed on the left side of the screen, in the **Project** tool window.
4. In the **Project** tool window, select a file that you want to inspect for problems.


:::note Note

If this is the very first time that you develop a Java program in IntelliJ IDEA, you may need to [define an SDK](https://www.jetbrains.com/help/idea/sdk.html#define-sdk) before you proceed with finding problems.

:::

At this point, your IntelliJ IDEA should look similar to the following:

<img
  src={require('/img/idea_main_window.jpg').default}
  alt="IDEA main window"
  className="bigimg"
/>

### Finding problems

To find all problems in your file:
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

The overall status of problem inspection is also shown in the top right corner of the editor window.

:::
  
### Fixing problems

Besides manually modifying your source code, you can fix problems using IntelliJ IDEA *quick fixes*. Quick fixes are context actions used to quickly modify your code and solve particular problems. One problem can have multiple quick fixes.

To fix problems:
1. In the **Problems** tab, right-click a problem.
2. In the popup window that opens, click **Show Quick Fixes**.
3. Select one of the quick fixes. 
<img
  src={require('/img/idea_quick_fixes.jpeg').default}
  alt="Quick fixes"
  className="smallimg"
/>

IntelliJ IDEA will change your source code according to the selected quick fix.

:::note Note

The **Show Quick Fixes** option can be unavailable if a problem requires an in-depth analysis from your side.

:::

### Further readings

You can get more from IntelliJ IDEA while fixing problems:
+ **Automation**. You can configure IntelliJ IDEA to automatically fix some of the problems before you commit your code to Git or when you save the file. For more information, refer to [Clean up your code](https://www.jetbrains.com/help/idea/resolving-problems.html#clean-up-code).

+ **Customization**. If you do not want to see some problems, you can [disable and suppress inspections](https://www.jetbrains.com/help/idea/disabling-and-enabling-inspections.html). If you need more rules for inspecting your code, you can [create custom inspections](https://www.jetbrains.com/help/idea/creating-custom-inspections.html).
