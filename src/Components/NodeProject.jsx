import { Grid, Card, CardContent, Collapse, CardActions } from '@mui/material'
import axios from "axios";
import React, { useEffect, useState } from "react";

const NodeProject = (props) => {
  const { currentProject } = props
  return (
    <Grid item xs={6}>
      <Card variant="outlined">
      <CardContent>
        {currentProject}
      </CardContent>
      <CardActions>
      </CardActions>
      </Card>
    </Grid>
  )
}

export default NodeProject