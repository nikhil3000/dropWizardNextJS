package com.cvent.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

import com.codahale.metrics.annotation.Timed;
import com.cvent.core.User;
import com.cvent.db.MyDAO;
import com.fasterxml.jackson.databind.util.JSONPObject;
import com.google.gson.Gson;

import org.jdbi.v3.core.Jdbi;

import io.dropwizard.jersey.PATCH;

@Path("/test")
@Produces(MediaType.APPLICATION_JSON)
public class HelloRoute {

    MyDAO dao;

    public HelloRoute(Jdbi jdbi) {
        dao = jdbi.onDemand(MyDAO.class);
    }

    @POST
    @Path("/post")
    @Timed
    @Consumes(MediaType.APPLICATION_JSON)
    public boolean setData(User user) {
        System.out.println(user.getName());
        System.out.println(user.getid());
        dao.insert(user.getid(), user.getName());
        return true;
    }

    @GET
    @Path("/get/{id}")
    public String getDataById(@PathParam("id") Integer id) {
        String name = dao.findNameById(id);
        return name;
    }

    @GET
    @Path("/get")
    // @Produces(MediaType.APPLICATION_JSON)
    public String getAllData() {
        List<String> list = dao.getAllNames();
        String str = new Gson().toJson(list);
        return str;
    }
}
