<template>
  <Card>
    <CardHeader>
      <CardTitle>Password</CardTitle>
      <CardDescription>
        Change your password here. After saving, you'll be logged out.
      </CardDescription>
    </CardHeader>
    <CardContent class="space-y-2">
      <div class="space-y-1">
        <Label for="current">Current password</Label>
        <Input id="current" type="password" />
      </div>
      <div class="space-y-1">
        <Label for="new">New password</Label>
        <Input id="new" type="password" />
      </div>
    </CardContent>
    <CardFooter>
      <Button>Save password</Button>
    </CardFooter>
  </Card>
</template>
