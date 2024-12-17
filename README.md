# Learnable

Learnable Git Task

## Version Control

- is the practice of tracking and managing changes to source code, ensuring changes are reversible and trackable

## Difference between git and github

- git is a popular version control system for tracking changes, who made those changes and coding colaboration while github is a code hosting platform for version control nad collaboration letting one work with others on projects from anywhere.

## Github alternatives

- Helix, Mercury and Azure Repos

## Difference between git fetch and git pull

- git fetch gets update from your remote repository without applying the changes to your current branch while git pull gets those updates and merges them into your current working branch.

## Explanation of git rebase and its command

- this command is a way to move changes from one branch to the end of another branch in order to have a tidy history. The command is

```bash
git rebase <branch-name>
```

## Explanation of git cherry-pick

- this command allows one to take a specific change from a branch and apply it to another branch. For example, if you made a fix in one branch, you can use its commit hash and apply that fix to another branch. The command is

```bash
git cherry-pick <commit-hash>
```
