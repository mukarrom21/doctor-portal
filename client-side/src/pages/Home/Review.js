import React from "react";

const Review = ({ comment }) => {
  return (
    <div class="card lg:max-w-96 bg-base-100 shadow-xl">
      <div class="card-body">
        <p>{comment.review}</p>
      </div>
      <div className="flex items-center">
        <div class="avatar m-5">
          <div class="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={comment.img} alt='reviewer' />
          </div>
        </div>
        <div className="">
            <h3 className="text-sm font-bold">{comment.name}</h3>
            <p className="text-sm">{comment.location}</p>
        </div>
      </div>
    </div>
  );
};

export default Review;
