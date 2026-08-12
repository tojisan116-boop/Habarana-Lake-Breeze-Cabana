const supabaseScript = document.createElement("script");

supabaseScript.src =
    "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

document.head.appendChild(supabaseScript);


supabaseScript.onload = () => {

    const { createClient } = window.supabase;

    const db = createClient(
        SUPABASE_URL,
        SUPABASE_ANON_KEY
    );


    const form =
        document.getElementById("availabilityForm");

    const results =
        document.getElementById("availabilityResults");


    if (!form || !results) {
        return;
    }


    form.addEventListener("submit", async (event) => {

        event.preventDefault();

        const checkin =
            document.getElementById("checkin").value;

        const checkout =
            document.getElementById("checkout").value;


        if (!checkin || !checkout) {

            results.innerHTML =
                "<p>Please select both dates.</p>";

            return;

        }


        if (checkout <= checkin) {

            results.innerHTML =
                "<p>Please choose a checkout date after check-in.</p>";

            return;

        }


        results.innerHTML =
            "<p>Checking availability...</p>";


        try {

            const { data, error } =
                await db.rpc(
                    "get_room_availability",
                    {
                        requested_checkin: checkin,
                        requested_checkout: checkout
                    }
                );


            if (error) {
                throw error;
            }


            if (!data || data.length === 0) {

                results.innerHTML =
                    "<div class='availability-card'>" +
                    "<div>" +
                    "<h3>No availability information</h3>" +
                    "<p>Please contact the property directly.</p>" +
                    "</div>" +
                    "</div>";

                return;

            }


            results.innerHTML = data.map(room => {

                const available =
                    Number(room.available_rooms) > 0;


                return `

                    <div class="availability-card">

                        <div>

                            <h3>${escapeHTML(room.room_name)}</h3>

                            <p>
                                ${available
                                    ? "Available for your selected dates."
                                    : "Currently unavailable for these dates."
                                }
                            </p>

                        </div>

                        <strong class="${available ? "available" : "unavailable"}">

                            ${
                                available
                                ? `${room.available_rooms} available`
                                : "Unavailable"
                            }

                        </strong>

                    </div>

                `;

            }).join("");


        } catch (error) {

            console.error(error);

            results.innerHTML = `

                <div class="availability-card">

                    <div>

                        <h3>
                            Availability temporarily unavailable
                        </h3>

                        <p>
                            Please contact the property directly
                            for current availability.
                        </p>

                    </div>

                </div>

            `;

        }

    });


    function escapeHTML(value) {

        return String(value)

            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }

};
