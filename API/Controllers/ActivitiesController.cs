using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API.Controllers;

public class ActivitiesController : BaseApiController
{
    [HttpGet]
    public async Task<ActionResult<List<Activity>>> GetActivities()
    {
        return await Mediator.Send(new Application.Activities.Queries.GetActivityList.Query());
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Activity>> GetActivity(string id)
    {
        var activity = await Mediator.Send(new Application.Activities.Queries.GetActivityDetails.Query { Id = id });

        if (activity == null) return NotFound();

        return activity;
    }
    [HttpPost]
    public async Task<ActionResult<string>> CreateActivity(Activity activity)
    {
        var activityId = await Mediator.Send(new Application.Activities.Queries.Command.CreateActivity.Command { Activity = activity });
        return Ok(activityId);
    }
}
