import React from "react";


const LandingPage = () => {


    const notifications = [
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugiat nam officia qui quidem, quos reprehenderit sint sit veritatis voluptatem.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut dolorum iste iusto labore laudantium nulla optio reiciendis totam vel?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos ex facilis in libero nam quaerat quibusdam quo tenetur veritatis!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cumque eius ipsa ipsam laboriosam nulla odio, quam repudiandae voluptatibus!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illo magni molestiae non obcaecati omnis qui temporibus tenetur vitae voluptate.", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet fugiat nam officia qui quidem, quos reprehenderit sint sit veritatis voluptatem.",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aut dolorum iste iusto labore laudantium nulla optio reiciendis totam vel?",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eos ex facilis in libero nam quaerat quibusdam quo tenetur veritatis!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid aut cumque eius ipsa ipsam laboriosam nulla odio, quam repudiandae voluptatibus!",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit illo magni molestiae non obcaecati omnis qui temporibus tenetur vitae voluptate.",
    ]


    return (
        <div className="flex justify-center align-middle items-center min-h-[90dvh]">
            <div className="flex max-w-[1400px] flex-clo w-full flex-wrap justify-evenly m-4">
                <img src="https://placehold.co/600x300"/>
                <div className="p-4">
                    <h2 className="mb-2 text-xlg underline font-semibold text-gray-900">Notifications:</h2>
                    <div>
                        <ul className="max-w-md space-y-1 text-text text-sm list-disc list-inside dark:text-gray-400 max-h-[300px] overflow-y-scroll">
                            {notifications.map((n) => <li>{n}</li>)}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default LandingPage;
