import { Grid, Card } from '@mui/material'
import axios from "axios";
import React, { useEffect, useState } from "react";
import NodeProject from "../Components/NodeProject"

const currentProjects = ["Presearch"]

const NodeGrid = () => {
  return (
    <Grid container spacing={2} className={"container"}>
      <Grid item xs={12}>
        <Card><h1>AYYYYY</h1></Card>
        {currentProjects && currentProjects.map((project) => {
        return (
          <NodeProject currentProject={project}/>
        )
      })}
      </Grid>
    </Grid>
  )
}

export default NodeGrid